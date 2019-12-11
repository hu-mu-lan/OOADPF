package Operation;  
import Canvas.interFace;
import Canvas.line;
import Canvas.machine;
import Canvas.project;
import Canvas.requirement;
import Canvas.shape;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
@WebServlet(urlPatterns={"/hasRequirement.do"})
public class hasRequirement extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		project item = (project)session.getAttribute("OneProject");
		boolean has = false;
		Class<requirement> requirementClass = requirement.class;
		for(shape itemShape :item.Canvas.getSlist()) {
			if(itemShape.getClass().equals(requirementClass)) {
				has = true;
			}
		}
		PrintWriter out = response.getWriter();
		if(has) {
			out.write("1");
		}else {
			out.write("0");
		}
	}
}
