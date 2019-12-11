package Operation;  
import Canvas.interFace;
import Canvas.line;
import Canvas.machine;
import Canvas.project;
import Canvas.shape;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
@WebServlet(urlPatterns={"/hasMachine.do"})
public class hasMachine extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		project item = (project)session.getAttribute("OneProject");
		boolean has = false;
		Class<machine> machineClass = machine.class;
		for(shape itemShape :item.Canvas.getSlist()) {
			if(itemShape.getClass().equals(machineClass)) {
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
