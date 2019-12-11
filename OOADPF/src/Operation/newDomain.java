package Operation;
import Canvas.domain;
import Canvas.project;
import Canvas.shape;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
@WebServlet(urlPatterns={"/newDomain.do"})
public class newDomain extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		project item = (project)session.getAttribute("OneProject");
		double left = Double.parseDouble(request.getParameter("left"));
		double top = Double.parseDouble(request.getParameter("top"));
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
		System.out.println(left+ top+ ShortName+ Description+ Property+ Type);
		shape Domain = new domain(left, top, ShortName, Description, Property, Type);
		item.Canvas.addShape(Domain);
		System.out.println(Description+":"+left+" "+top);
	}
}
