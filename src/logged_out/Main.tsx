import LoginDialog from "./dialogs/LoginDialog";
import LoggedOutAppBar from "./navigation/Navigation";

export default function Main() {
  return (
    <div>
      <LoggedOutAppBar />

      {/* Dialogs */}
      <LoginDialog />
    </div>
  );
}
