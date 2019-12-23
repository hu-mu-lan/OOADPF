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
@WebServlet(urlPatterns={"/HasSingleShape.do"})
public class hasSingleShape extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		project item = (project)session.getAttribute("OneProject");
		HashSet<shape> allShapes = new HashSet<>();
		boolean ans = false;
		for(line itemLine :item.Canvas.getLlist()) {
			allShapes.add(itemLine.getOrigin());
			allShapes.add(itemLine.getTerminal());
		}
		for(shape shapeItem: item.Canvas.getSlist()) {
			if(!allShapes.contains(shapeItem)) {
				ans = true;
				break;
			}
		}
		PrintWriter out = response.getWriter();
		if(ans) {
			out.write("1");
		}else {
			out.write("0");
		}
	}
}
