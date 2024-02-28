// Adjust the path to your Database file
import Database from './Database';

// Get the Supabase client instance
const supabase = Database();

// Function to insert a new user into the UserInfo table
const insertUser = async (UserName, Password) => {
    try {
        // Perform the insert operation
        const { data, error } = await supabase
            .from('UserInfo')
            .insert([{ UserName: UserName, Password: Password, Followers:0, Posts:0 }]);

        if (error) {
            console.error('Error inserting new user:', error.message);
        } else {
            console.log('New user inserted:', data);
        }
    } catch (error) {
        console.error('Error inserting new user:', error.message);
    }
};

// Define newUser function to be exported
export default function newUser(UserName, Password) {
    // Call the function to insert a new user
    insertUser(UserName, Password);
}
