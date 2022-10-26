package com.example.Test002.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

public class LoginController {

    @ResponseBody
    public String Login(
            @RequestParam("useraccount") String useraccount,
            @RequestParam("username") String password,
            Model model,
            HttpSession session

    )
    {
        //specific business:
        if(!StringUtils.isEmpty(useraccount) && "123456".equals(password))
        {
            return "dashboard";
        }
        else
        {
            //tell user, he failed to login
            model.addAttribute("msg","incorrect useraccount or password");
            return "index";
        }

    }
}
