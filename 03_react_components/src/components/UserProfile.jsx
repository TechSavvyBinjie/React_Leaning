const UserProfile = ({ name, age, onAgeChange }) => {
  return (
    <div>
      <h2>user</h2>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <button onClick={onAgeChange}>点击我</button>
    </div>
  );
};
export default UserProfile;
