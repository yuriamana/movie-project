// custom tools
import IconSignout from "../components/icon/IconSignout";
import { useAuth } from "./../auth/UserContext";
import "./../styles/icon-avatar.css";

export default function Dashboard() {
  const { currentUser } = useAuth();
  return (
    <>
      <h1 className="title">
        <span>Dashboard</span>
        <IconSignout />
      </h1>
      <p>welcome {currentUser.username}</p>
      <img className="icon-avatar" src={currentUser.avatar} alt="my avatar" />
      <pre>{JSON.stringify(currentUser, undefined, 2)}</pre>
    </>
  );
}
