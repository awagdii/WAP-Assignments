package com.wap.project;

import java.sql.*;

public class DbConnection {

    private static Connection conn;

    public static void main(String [] args){
        getConnection();
    }

    public static Connection getConnection() {
        if (conn == null) {
            try {
                Class.forName("com.mysql.jdbc.Driver");
                conn = DriverManager.getConnection(
                        "jdbc:mysql://localhost:3306/entries", "root", "root");
//here sonoo is database name, root is username and password
//                Statement stmt = conn.createStatement();
//                ResultSet rs = stmt.executeQuery("select * from entries");
//                while (rs.next())
//                    System.out.println(rs.getString(1) + "  " + rs.getString(2) + "  " + rs.getString(3));
//                conn.close();

            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return conn;

    }
}
