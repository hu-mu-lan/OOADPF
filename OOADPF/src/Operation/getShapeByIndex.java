package Operation;  
import Canvas.interFace;
import Canvas.line;
import Canvas.project;
import Canvas.shape;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
@WebServlet(urlPatterns={"/getShapeByIndex.do"})
public class getShapeByIndex extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		project item = (project)session.getAttribute("OneProject");
		int index = Integer.parseInt(request.getParameter("index"));
		shape shapedes = item.Canvas.getSlist().get(index - 1);
		String desString = shapedes.getDescription();
		PrintWriter out = response.getWriter();
    	out.write(desString);
	}
}
