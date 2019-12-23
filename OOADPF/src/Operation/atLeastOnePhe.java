package Operation;
import Canvas.interFace;
import Canvas.line;
import Canvas.project;
import Canvas.shape;
import java.io.*;
import java.util.HashSet;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
@WebServlet(urlPatterns={"/atLeastOnePhe.do"})
public class atLeastOnePhe extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		project item = (project)session.getAttribute("OneProject");
		boolean ans = true;
		for(line lineitem: item.Canvas.getLlist()) {
			if(lineitem.getPhenomenon() == null || lineitem.getPhenomenon().getPlist() == null || lineitem.getPhenomenon().getPlist().isEmpty()) {
				ans = false;
				break;
			}
		}
		PrintWriter out = response.getWriter();
		if(ans) {
			out.write("0");
		}else {
			out.write("1");
		}
		System.out.println("ans"+ans);
	}
}
