package Operation;
import Canvas.requirement;
import Canvas.project;
import Canvas.shape;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
@WebServlet(urlPatterns={"/newRequirement.do"})
public class newRequirement extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		project item = (project)session.getAttribute("OneProject");
		double left = Double.parseDouble(request.getParameter("left"));
		double top = Double.parseDouble(request.getParameter("top"));
		String Description = request.getParameter("Description");
		shape Requirement = new requirement(left, top, Description);
		item.Canvas.addShape(Requirement);
	}
}
