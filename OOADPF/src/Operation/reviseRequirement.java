package Operation;
import Canvas.machine;
import Canvas.project;
import Canvas.requirement;
import Canvas.shape;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
@WebServlet(urlPatterns={"/reviseRequirement.do"})
public class reviseRequirement extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		project item = (project)session.getAttribute("OneProject");
		String Id = request.getParameter("Id");
		String Description = request.getParameter("Description");
		requirement objectRequirement = (requirement)item.Canvas.getSlist().get(Integer.parseInt(Id));
		objectRequirement.editInfo(Description);
		System.out.println(Description);
	}
}
