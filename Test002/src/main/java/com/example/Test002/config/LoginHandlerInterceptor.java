package com.example.Test002.config;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginHandlerInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception
    {
        //登陆成功后应更改有用户的session
        Object loginUser = request.getSession().getAttribute("loginuser");

        if (loginUser == null)
        {
            request.setAttribute("msg","no authorizing, please first login");
            request.getRequestDispatcher("/index.html").forward(request,response);
            return false;
        }
        else
        {
            return true;
        }

    }
}
