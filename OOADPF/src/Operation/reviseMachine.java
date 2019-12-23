package Operation;
import Canvas.machine;
import Canvas.project;
import Canvas.shape;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
@WebServlet(urlPatterns={"/reviseMachine.do"})
public class reviseMachine extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		project item = (project)session.getAttribute("OneProject");
		String Id = request.getParameter("Id");
		String ShortName = request.getParameter("ShortName");
		String Description = request.getParameter("Description");
		machine objectMachine = (machine)item.Canvas.getSlist().get(Integer.parseInt(Id.substring(7)));
		objectMachine.setShortname(ShortName);
		objectMachine.setDescription(Description);
	}
}
