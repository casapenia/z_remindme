package com.dppware.remindme.facade.filter;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

public class LoginRequiredServlet extends HttpServlet {

    private static final Map<String, String> openIdProviders;
    static {
        openIdProviders = new HashMap<String, String>();
        openIdProviders.put("Google", "google.com/accounts/o8/id");
        openIdProviders.put("Yahoo", "yahoo.com");
        openIdProviders.put("MySpace", "myspace.com");
        openIdProviders.put("AOL", "aol.com");
        openIdProviders.put("MyOpenId.com", "myopenid.com");
    }

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {
    	System.out.println("entrando ...");
        UserService userService = UserServiceFactory.getUserService();
        System.out.println("obtengo servicio");
        User user = userService.getCurrentUser(); // or req.getUserPrincipal()
        System.out.println("usuario que tengo es "+user);
       //
        Set<String> attributes = new HashSet();

        resp.setContentType("text/html");
        PrintWriter out = resp.getWriter();

        if (user != null) {
            out.println("Hello <i>" + user.getNickname() + "</i>!");
            out.println("[<a href=\""
                    + userService.createLogoutURL(req.getRequestURI())
                    + "\">sign out</a>]");
        } else {
            out.println("Hello world! Sign in at: ");
            for (String providerName : openIdProviders.keySet()) {
                String providerUrl = openIdProviders.get(providerName);
                String loginUrl = userService.createLoginURL(req
                        .getRequestURI(), null, providerUrl, attributes);
                out.println("[<a href=\"" + loginUrl + "\">" + providerName + "</a>] ");
            }
        }
    }
}
