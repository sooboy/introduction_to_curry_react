
# Instruction for React

## 初始化 React 项目

```shell
npm install -g create-react-app

create-react-app my-app --scripts-version=react-scripts-ts
```

## React 中的类型

### `React.FunctionComponent<P> or React.FC<P>` 函数式组件

```typescript jsx
const FCComponents :React.FC<{name:string}>= props =>{
     const { name} = props;
     return <div> {name} </div>
}
```

### `React.Component<P, S>` class 组件


# Introduction

###  React & Redux 中的类型定义


# React - 的类型列表

#### `React.FunctionComponent<P>` or `React.FC<P>`
函数组件类型
```tsx
const MyComponent: React.FC<Props> = ...
```

#### `React.Component<P, S>`
类组件
```tsx
class MyComponent extends React.Component<Props, State> { ...
```

#### `React.ComponentProps<typeof Component>`
获取一个组件Props类型
```tsx
type MyComponentProps = React.ComponentProps<typeof MyComponent>;
```

#### `React.ComponentType<P>`
(React.FC | React.Component) 的联合类型
```tsx
const withState = <P extends WrappedComponentProps>(
  WrappedComponent: React.ComponentType<P>,
) => { ...
```

#### `React.ReactElement<P>` or `JSX.Element`
```tsx
const elementOnly: React.ReactElement = <div /> || <MyComponent />;
```
代表一个React元素 ，可以是真实的DOM结构 如`<div>` 也可以是 React组件 `<MyComponents>`

#### `React.ReactNode`
代表任意的React 节点
```tsx
const elementOrPrimitive: React.ReactNode = 'string' || 0 || false || null || undefined || <div /> || <MyComponent />;
const Component = ({ children: React.ReactNode }) => ...
```

#### `React.CSSProperties`
React组件内部的 Style 
```tsx
const styles: React.CSSProperties = { flexDirection: 'row', ...
const element = <div style={styles} ...
```

#### `React.ReactEventHandler<E>`
React 的通用事件类型
```tsx
const handleChange: React.ReactEventHandler<HTMLInputElement> = (ev) => { ... } 

<input onChange={handleChange} ... />
```

#### `React.MouseEvent<E>` | `React.KeyboardEvent<E>` | `React.TouchEvent<E>` etc...
特殊的事件类型
```tsx
const handleChange = (ev: React.MouseEvent<HTMLDivElement>) => { ... }

<div onMouseMove={handleChange} ... />
```

