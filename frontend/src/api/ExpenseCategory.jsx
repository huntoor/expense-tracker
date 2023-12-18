import axios from 'axios';

const ExpenseCategory = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/expense-categories');
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export const ExpenseCategories = await ExpenseCategory();
