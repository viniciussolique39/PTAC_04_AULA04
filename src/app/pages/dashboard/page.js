import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   const users = getUsers();
    return (
        <div>

            <h1>Dashboard</h1>
            <h3>Lista de usuario:</h3>
            <ul>
                {users.map((user) => (
                  <li key={user}>{user.name}, {user.email}</li>
                ))}
            </ul>
        </div>
    );
};