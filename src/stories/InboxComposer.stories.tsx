import { Button, Checkbox, Space } from "antd";
import InboxComposer from "../components/InboxComposer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InboxComposer> = {
  title: "InboxComposer",
  component: InboxComposer,
  args: {},
  render(props) {
    return (
      <div style={{ paddingLeft: 42 }}>
        <InboxComposer style={{ width: 800 }} {...props} />
      </div>
    );
  },
};

type Story = StoryObj<typeof InboxComposer>;

export const Basic: Story = {};

export const WithAntdProps: Story = {
  args: {
    showCount: true,
    maxLength: 2000,
    autoSize: {
      maxRows: 4,
      minRows: 4,
    },
    placeholder: "请输入内容",
  },
};

export const Slot: Story = {
  args: {
    SlotHeader: () => {
      return (
        <Space>
          <Checkbox>带名字</Checkbox>
          <Checkbox>街区名字</Checkbox>
          <Checkbox>插入名字</Checkbox>
          <Checkbox>发送当前聊天</Checkbox>
          <Checkbox>群发@全部</Checkbox>
          <Checkbox>信息直接发送</Checkbox>
        </Space>
      );
    },
    SlotFooter: () => {
      return (
        <div>
          <Button size={"small"}>做点什么</Button>
        </div>
      );
    },
    showCount: true,
    maxLength: 2000,
    autoSize: {
      maxRows: 4,
      minRows: 4,
    },
    placeholder: "请输入内容",
  },
};
export default meta;
