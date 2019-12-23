package Operation;  
import Canvas.constraint;
import Canvas.domain;
import Canvas.interFace;
import Canvas.line;
import Canvas.machine;
import Canvas.project;
import Canvas.shape;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
@WebServlet(urlPatterns={"/hasConstraint.do"})
public class hasConstraint extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		project item = (project)session.getAttribute("OneProject");
		int has = 0;
		Class<constraint> constraintClass = constraint.class;
		for(line itemLine :item.Canvas.getLlist()) {
			if(itemLine.getClass().equals(constraintClass)) {
				has++;
			}
		}
		PrintWriter out = response.getWriter();
		String ans = String.valueOf(has);
		out.write(ans);
	}
}
