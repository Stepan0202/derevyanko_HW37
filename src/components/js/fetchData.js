async function fetchUsers(setUsers){
    try{  
      if(!localStorage['users']){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error("Something wrong with server`s response!");
        const data = await response.json();
        localStorage.setItem('users', JSON.stringify(data));

      }
      const storedData = JSON.parse(localStorage.getItem('users'));
      setUsers(storedData);
    }
    catch(error){
      console.error('Error fetching data:', error);
    }
  }
  export default fetchUsers;