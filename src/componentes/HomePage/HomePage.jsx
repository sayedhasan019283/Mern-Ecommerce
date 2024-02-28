import { useAuth } from "../../context/Auth";


const HomePage = () => {
    const [auth] = useAuth();
    return (
        <div>
            <h3>This is Home Page</h3>
            <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
        </div>
    );
};

export default HomePage;