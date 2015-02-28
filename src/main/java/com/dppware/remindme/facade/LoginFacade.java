package com.dppware.remindme.facade;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserServiceFactory;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

@Path("/login")
public class LoginFacade {

	@POST
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.APPLICATION_JSON)
    public Response login(@FormParam("userName") String userName,@FormParam("userPassword") String userPassword) {
		
		UserService userService = UserServiceFactory.getUserService();
		System.out.println("Obtengo el service "+ userService);
        User user = userService.getCurrentUser(); // or req.getUserPrincipal()
        System.out.println("el current user es "+ user.getEmail());

		
		if(userName == null || userName.equals("")|| userPassword == null || userPassword.equals("")){
			return Response.status(Status.BAD_REQUEST).entity("Datos de formulario invalidos, no pueden ser vacios").build();
		}
		boolean validated = false;
		//Obtenemos usuario
		//UserDto user = new UserService().validateUser(userName, userPassword);
		if(user==null){
			return Response.status(Status.UNAUTHORIZED).entity("El usuario/password especificado no existe en el sistema").build();
		}
		
		
		//return Response.ok().entity("Bienvenido "+ user.getName()+ " "+user.getLastName()).build();
		return Response.ok().entity("Bien venido "+ user.getNickname()).build();
		
	}
	
	
	
}
