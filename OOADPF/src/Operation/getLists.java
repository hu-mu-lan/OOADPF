package Operation;
import Canvas.interFace;
import Canvas.line;
import Canvas.project;
import Canvas.shape;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
@WebServlet(urlPatterns={"/getLists.do"})
public class getLists extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		project item = (project)session.getAttribute("OneProject");
		String whichList = request.getParameter("List");
		int Symbol = Integer.parseInt(request.getParameter("Symbol"));
		if(Symbol == 1) {
			PrintWriter out = response.getWriter();
			StringBuffer responseStringBuf = new StringBuffer();
			if(whichList.equals("slist")) {
				if(item.Canvas.getSlist().isEmpty()) {
					out.write("NAN");
				}else {
					for(int i = 0; i < item.Canvas.getSlist().size(); i++) {
						responseStringBuf.append(item.Canvas.getSlist().get(i).getDescription()+";");
					}
					String responseString = responseStringBuf.toString();
					responseString = responseString.substring(0, responseString.length()-1);
					out.write(responseString);
				}
			}
		}else if(Symbol == 2) {
			PrintWriter out = response.getWriter();
			StringBuffer responseStringBuf = new StringBuffer();
			if(whichList.equals("slist")) {
				if(item.Canvas.getSlist().isEmpty()) {
					out.write("NAN");
				}else {
					for(shape itemShape: item.Canvas.getSlist()) {
						responseStringBuf.append(itemShape.getDescription()+";"+itemShape.getTop()+";"+itemShape.getLeft()+";");
					}
					String responseString = responseStringBuf.toString();
					responseString = responseString.substring(0, responseString.length()-1);
					out.write(responseString);
				}
			}
		}
	}
}
