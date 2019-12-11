package Operation;  
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
@WebServlet(urlPatterns={"/hasDomain.do"})
public class hasDomain extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		project item = (project)session.getAttribute("OneProject");
		int has = 0;
		Class<domain> domainClass = domain.class;
		for(shape itemShape :item.Canvas.getSlist()) {
			if(itemShape.getClass().equals(domainClass)) {
				has++;
			}
		}
		PrintWriter out = response.getWriter();
		String ans = String.valueOf(has);
		out.write(ans);
	}
}
