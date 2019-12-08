package Operation;
import Canvas.interFace;
import Canvas.line;
import Canvas.project;
import Canvas.shape;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
@WebServlet(urlPatterns={"/newInterface.do"})
public class newInterface extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		project item = (project)session.getAttribute("OneProject");
		String originDes = request.getParameter("origin");
		String terminalDes = request.getParameter("terminal");
		shape origin = null;
		shape terminal = null;
		for(shape sitem: item.Canvas.getSlist()) {
			if(sitem.Description.equals(originDes)) {
				origin = sitem;
			}
		}
		for(shape titem: item.Canvas.getSlist()) {
			if(titem.Description.equals(terminalDes)) {
				terminal = titem;
			}
		}
		String Type = request.getParameter("Type");
		line Interface = new interFace(origin, terminal, Type);
		item.Canvas.addLine(Interface);
	}
}
