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
		String Property = request.getParameter("Property");
		String Type = request.getParameter("Type");
		shape Domain = new domain(left, top, ShortName, Description, Property, Type);
		item.Canvas.addShape(Domain);
	}
}
