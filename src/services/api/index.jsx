import { useState, useEffect } from "react";
import axios from "axios";
import useGetStore from "../../Stores/Redux/useGetStore";
import usePostStore from "../../Stores/Redux/usePostData";
import useUpdateStore from "../../Stores/Redux/UseUpdateStore";

const Index = () => {
    const initialState = useGetStore((state) => state.initialState);
    const setInitialState = useGetStore((state) => state.setInitialState);
    const newUser = usePostStore((state) => state.newUser);
    const setNewUser = usePostStore((state) => state.setNewUser);
    const updateUser = useUpdateStore((state) => state.updateUser);
    const setUpdateUser = useUpdateStore((state) => state.setUpdateUser);

    const [loading, setLoading] = useState(false);
    const [showData, setShowData] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            setLoading(true);
            const res = await axios.get("https://66892fb20ea28ca88b873ab5.mockapi.io/api/v1/users");
            console.log(res.data);
            setInitialState(res.data);
            setShowData(true);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const postData = async () => {
        try {
            setLoading(true);
            const res = await axios.post("https://66892fb20ea28ca88b873ab5.mockapi.io/api/v1/users", newUser);
            console.log(res.data);
            setNewUser({ name: '', description: '' });
            getData(); 
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const updateData = async () => {
        try {
            setLoading(true);
            const res = await axios.put(`https://66892fb20ea28ca88b873ab5.mockapi.io/api/v1/users/${updateUser.id}`, {
                name: updateUser.name,
                description: updateUser.description
            });
            console.log(res.data);
            setUpdateUser({ id: '', name: '', description: '' });
            getData(); 
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const deleteData = async (id) => {
        try {
            setLoading(true);
            await axios.delete(`https://66892fb20ea28ca88b873ab5.mockapi.io/api/v1/users/${id}`);
            getData(); 
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleUpdateChange = (e) => {
        const { name, value } = e.target;
        setUpdateUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    return (
        <div>
            <button onClick={getData}>
                Get Data
            </button>

            <form onSubmit={(e) => {
                e.preventDefault();
                postData();
            }}>
                <input 
                    type="text" 
                    name="name" 
                    value={newUser?.name || ''} 
                    onChange={handleChange} 
                    placeholder="Name" 
                    required 
                />
                <input 
                    type="text" 
                    name="description" 
                    value={newUser?.description || ''} 
                    onChange={handleChange} 
                    placeholder="Description" 
                    required 
                />
                <button type="submit">Add Data</button>
            </form>

            {updateUser.id && (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    updateData();
                }}>
                    <input 
                        type="text" 
                        name="name" 
                        value={updateUser?.name || ''} 
                        onChange={handleUpdateChange} 
                        placeholder="Name" 
                        required 
                    />
                    <input 
                        type="text" 
                        name="description" 
                        value={updateUser?.description || ''} 
                        onChange={handleUpdateChange} 
                        placeholder="Description" 
                        required 
                    />
                    <button type="submit">Update Data</button>
                </form>
            )}

            {loading && <h1>Loading...</h1>}
            {showData && !loading && initialState.map((item) => (
                <div key={item.id}>
                    <h1>{item.id}</h1>
                    <div><img src={item.avatar} alt={item.name} /></div>
                    <h2>{item.name}</h2>
                    <h2>{item.description}</h2>
                    <button onClick={() => setUpdateUser({ id: item.id, name: item.name, description: item.description })}>
                        Edit
                    </button>
                    <button onClick={() => deleteData(item.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Index;