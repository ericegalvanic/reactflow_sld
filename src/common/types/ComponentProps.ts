export type ComponentProps<C extends (props: any) => any> = C extends (
  props: infer P extends Record<string, unknown>
) => any
  ? P
  : never;
