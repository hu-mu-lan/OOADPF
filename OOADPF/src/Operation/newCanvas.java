package Operation;
import Canvas.project;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
@WebServlet(urlPatterns={"/newCanvas.do"})
public class newCanvas extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		project item = new project();
		String Description = request.getParameter("description");
		item.setDescription(Description);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		project item = new project();
		String Description = request.getParameter("description");
		item.setDescription(Description);
	}
}
