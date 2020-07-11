import ForgeUI, { render, Fragment, Macro, Text } from "@forge/ui";


const App = () => {
  return (
    <Fragment>
      <Text>Complaint Handling: Aplikasi Pengaduan Online</Text>
    </Fragment>
  );
};

export const run = render(
  <Macro
    app={<App />}
  />
);
