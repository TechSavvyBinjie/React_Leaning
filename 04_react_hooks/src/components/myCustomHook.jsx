import { useDebugValue } from 'react';

function myCustomHook() {
  const value = /* ... */;
  useDebugValue(value);
  // 或者使用格式化函数
  useDebugValue(value, (value) => {
    return `Formatted value: ${value}`;
  });
  // Hook 的其余逻辑
}