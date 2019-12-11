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
		String originLoc = request.getParameter("origin");
		String terminalLoc = request.getParameter("terminal");
		String Phenomenons = request.getParameter("Phenomenons");
		String[] PhenomenonsList = Phenomenons.split(";");
		shape origin = item.Canvas.getSlist().get(Integer.parseInt(originLoc)-1);
		shape terminal = item.Canvas.getSlist().get(Integer.parseInt(terminalLoc)-1);
		String Type = request.getParameter("Type");
		line Interface = new interFace(origin, terminal, Type);
		item.Canvas.addLine(Interface);
		for(String item2 : PhenomenonsList) {
			Interface.displayAddPhonomenon(item2);
		}
		String tmp = String.valueOf(origin.getLeft()-37.5)+";"+String.valueOf(origin.getTop()+87.5)+";"+String.valueOf(terminal.getLeft()-37.5)+";"+String.valueOf(terminal.getTop()+87.5);
		PrintWriter out = response.getWriter();
    	out.write(tmp);
	}
}
