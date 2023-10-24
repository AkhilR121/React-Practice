export type InitialState = Readonly<{
  id: number;
  title: string;
  done: boolean;
}>;

export type SideNavOptProps = Readonly<{
  id: number;
  icon: JSX.Element;
  title: string;
}>;

export type WorkSpaceOptProps = Readonly<{
  id: number;
  icon: JSX.Element;
  title: string;
}>;
