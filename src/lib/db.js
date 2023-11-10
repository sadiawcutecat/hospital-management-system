const {DB_USER,DB_PASS}=process.env
export const dbConnection = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.h6deoil.mongodb.net/healthCareDB?retryWrites=true&w=majority`;
