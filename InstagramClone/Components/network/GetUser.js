import Database from './Database'; // Adjust the path to your Database file

const supabase = Database();

const fetchUserData = async () => {
    try {
        const { data, error } = await supabase
            .from('UserInfo') // table
            .select('*'); // sql querry
        if (error) {
            console.error('Error fetching user data:', error.message);
        } else {
            console.log('User data:', data);
        }
    } catch (error) {
        console.error('Error fetching user data:', error.message);
    }
};

// Define newUser function to be exported
export default function GetUser() {
    // Call the function to fetch user data
    return fetchUserData();
}
