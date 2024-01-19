import { FC, useEffect, useRef, useState } from "react";
import { Input } from "antd";
import { TextAreaProps } from "antd/es/input";
import { SlotType } from "@/types";
import EmojiPickerWrapper from "./EmojiPickerWrapper";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import styled from "styled-components";

export type InboxComposerProps = {
  SlotHeader?: SlotType;
  SlotFooter?: SlotType;
} & TextAreaProps;

const TextareaWrapper = styled.div`
  position: relative;
  .epr-emoji-img {
    position: absolute;
    cursor: pointer;
    right: 2px;
    bottom: -1px;
    transform: translateY(100%);
  }

  .ant-input-data-count {
    padding-right: 24px;
  }
`;

const HeaderWrapper = styled.div`
  margin-bottom: 4px;
`;

const FooterWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: -4px;
  transform: translateY(100%);
`;

const InboxComposer: FC<InboxComposerProps> = ({
  SlotFooter,
  SlotHeader,
  value: _value,
  onChange,
  onBlur,
  ...resetProps
}) => {
  const lastCursorPosition = useRef<number>(0);
  const [value, setValue] = useState((_value as string) ?? "");

  useEffect(() => {
    setValue(_value as string);
  }, [_value]);

  function handleAddEmoji(emoji) {
    const _value = value ?? "";
    const newContent =
      _value.slice(0, lastCursorPosition.current) +
      emoji +
      _value.slice(lastCursorPosition.current);
    lastCursorPosition.current = lastCursorPosition.current + emoji.length;
    setValue(newContent);
    onChange?.({
      target: {
        value: newContent,
      },
    } as any);
  }

  return (
    <TextareaWrapper>
      {SlotHeader && (
        <HeaderWrapper>
          <SlotHeader value={value} />
        </HeaderWrapper>
      )}
      <Input.TextArea
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
          onChange?.(ev);
        }}
        {...resetProps}
        data-testid={"inbox-composer"}
        onBlur={(ev) => {
          onBlur?.(ev);
          lastCursorPosition.current = ev.target.selectionStart;
        }}
      />
      <EmojiPickerWrapper onSelect={handleAddEmoji}>
        <div>
          <Emoji unified={"1f600"} emojiStyle={EmojiStyle.FACEBOOK} size={18} />
        </div>
      </EmojiPickerWrapper>
      {SlotFooter && (
        <FooterWrapper>
          <SlotFooter value={value} />
        </FooterWrapper>
      )}
    </TextareaWrapper>
  );
};

export default InboxComposer;
