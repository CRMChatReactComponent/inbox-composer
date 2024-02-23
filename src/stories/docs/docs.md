# 使用

## 安装

```shell
pnpm install @crmchatreactcomponent/inbox-composer -D
```

## 使用

```tsx
import {
  InboxComposer,
  AntdApiContextProviderCmp,
  I18nContextCmp,
} from "@crmchatreactcomponent/inbox-composer";

const UserNoteWrapper = function () {
  const [value, setValue] = useState("");

  return (
    <AntdApiContextProviderCmp>
      <I18nContextCmp>
        <InboxComposer
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          SlotHeader={<div>头部内容</div>}
          SlotFooter={<div>底部内容</div>}
        />
      </I18nContextCmp>
    </AntdApiContextProviderCmp>
  );
};
```

该组件使用 `i8next` 和 `antd` 来分别处理多语言和主题切换功能，因此在调用 `<InboxComposer/>` 时需要将其包裹在 `AntdApiContextProviderCmp` 和 `I18nContextCmp` 中，以保证逻辑代码正常运行。

> 只需要包裹下即可，不需要进行任何配置

# 参数

该组件使用 [antd textarea](https://ant.design/components/input#inputtextarea) 组件。

因此它支持所有的 `antd textarea` 参数。请查看 antd 官网了解参数内容

# Slot

插槽

该组件提供以下插槽

1. [SlotFooter](/story/inboxcomposer--slot)
2. [SlotHeader](/story/inboxcomposer--slot)
