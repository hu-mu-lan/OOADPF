package Operation;
import Canvas.machine;
import Canvas.project;
import Canvas.shape;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
@WebServlet(urlPatterns={"/newMachine.do"})
public class newMachine extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		project item = (project)session.getAttribute("OneProject");
		double left = Double.parseDouble(request.getParameter("left"));
		double top = Double.parseDouble(request.getParameter("top"));
		String ShortName = request.getParameter("ShortName");
		String Description = request.getParameter("Description");
		shape Machine = new machine(left, top, ShortName, Description);
		item.Canvas.addShape(Machine);
	}
}
