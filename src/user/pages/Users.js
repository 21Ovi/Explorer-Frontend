import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USER = [
    {
      id: "u1",
      name: "test user",
      image:
        "https://images.unsplash.com/photo-1651010965980-c26efd6e3995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
      places: 3,
    },
  ];

  return <UsersList items={USER} />;
};

export default Users;
