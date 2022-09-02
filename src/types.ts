// Allows typescript to understand Parcel's style imports
// https://github.com/parcel-bundler/parcel/issues/7231#issuecomment-1127475666
declare module '*.module.scss' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}
