import pg from "pg";

const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    database: "Sportsphere",
    password: "2019Tommyj",
    port: 5432,
});

// Map user-friendly stat names to actual table names in the database
const STAT_TABLES = {
    "most championships": "f1_most_championships",
    "most pole positions": "f1_most_pole_positions",
    "most race wins": "f1_most_race_wins",
    "most podiums": "f1_most_podiums",
    "most fastest laps": "f1_most_fastest_laps",
    "fastest lap at a given circuit": "f1_fastest_lap_at_a_circuit", // Adjusted naming
    "most goals": "football_most_goals",
    "most assists": "football_most_assists",
    "most ballon d'ors": "football_most_ballon_dor_winners",
    "most match wins": "football_most_match_wins",
    "most champions league winners": "football_most_champions_league_winners",
};

// Generic function to fetch data from any stats table
export const getStats = async (stat) => {
    const tableName = STAT_TABLES[stat];

    if (!tableName) {
        throw new Error("Invalid stat selected");
    }

    // Define the query dynamically based on the table
    const query = `SELECT * FROM sportsphere.${tableName};`;

    const {rows} = await pool.query(query);
    return rows;
};