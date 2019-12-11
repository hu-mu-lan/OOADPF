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
@WebServlet(urlPatterns={"/hasInterface.do"})
public class hasInterface extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		project item = (project)session.getAttribute("OneProject");
		int has = 0;
		Class<interFace> interfaceClass = interFace.class;
		for(line itemLine :item.Canvas.getLlist()) {
			if(itemLine.getClass().equals(interfaceClass)) {
				has++;
			}
		}
		PrintWriter out = response.getWriter();
		String ans = String.valueOf(has);
		out.write(ans);
	}
}
