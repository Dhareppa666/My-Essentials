import { useEffect, useState } from "react"
import "./ServerFetch.css";

export const ServerFetch = () => {

    const [data, setData] = useState();

    useEffect(() => {

        const getData = async () => {
            const res = await fetch(
              "https://testapi.devtoolsdaily.com/users?limit=10"
              //   "https://dummyjson.com/todos"
            );
            const data = await res.json();
            console.log(data);
            setData(data);
        }

        getData();
    }, [])

    const UserComp = (user) => {
        return (
          <div className="user-card-root">
            <div className="user-card">
              <h4>{user.firstName}</h4>
              <h4>{":" + user.lastName}</h4>
            </div>
            {/* <h4>{user.countryCode}</h4> */}
          </div>
        );
    }

    return (
      <div className="user-root">
        { data && data.map((user) => {
          return UserComp(user);
        })}
      </div>
    );
}