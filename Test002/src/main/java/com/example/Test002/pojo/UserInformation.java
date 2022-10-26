package com.example.Test002.pojo;

public class UserInformation {

    private String userName;
    private String userPassword;
    private String userAccount;
    private String userTelephone;

    public  UserInformation(String userName,String userPassword, String userAccount, String userTelephone)
    {
        this.userName = userName;
        this.userPassword = userPassword;
        this.userAccount = userAccount;
        this.userTelephone = userTelephone;
    }

    public String getUserName()
    {
        return userName;
    }

    public void setUserName(String userName)
    {
        this.userName = userName;
    }

    public String getUserPassword()
    {
        return userPassword;
    }

    public void setUserPassword(String userPassword)
    {
        this.userPassword = userPassword;
    }

    public String getUserAccount()
    {
        return userAccount;
    }

    public void setUserAccount()
    {
         this.userAccount = userAccount;
    }

    public String getUserTelephone()
    {
        return userTelephone;
    }

    public void setUserTelephone()
    {
        this.userTelephone = userTelephone;
    }
}
