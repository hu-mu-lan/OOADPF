package Operation;
import Canvas.domain;
import Canvas.machine;
import Canvas.project;
import Canvas.shape;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
@WebServlet(urlPatterns={"/reviseDomain.do"})
public class reviseDomain extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		project item = (project)session.getAttribute("OneProject");
		String Id = request.getParameter("Id");
		domain objectDomain = (domain)item.Canvas.getSlist().get(Integer.parseInt(Id));
		String ShortName = request.getParameter("ShortName");
		String Description = request.getParameter("Description");
		int PropertyNum = Integer.parseInt(request.getParameter("Property"));
		int TypeNum = Integer.parseInt(request.getParameter("Type"));
		String Property = null;
		String Type = null;
		if(PropertyNum == 1) {
			Property = "GivenDomain";
		}else {
			Property = "DesignDomain";
		}
		
		if(TypeNum == 1) {
			Type = "Casual";
		}else if(TypeNum == 2) {
			Type = "Biddable";
		}else{
			Type = "Lexical";
		}
		objectDomain.editInfo(ShortName, Description, Property, Type);
		System.out.println(ShortName + Description + Property + Type);
	}
}
