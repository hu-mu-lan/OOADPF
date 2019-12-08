package Canvas;

import Canvas.shape;
import Canvas.line;

import java.util.ArrayList;
public class canvas {
	static ArrayList <shape> slist=null;
	static ArrayList <line> llist=null;

	public canvas() {
		slist = new ArrayList<shape>();
		llist = new ArrayList<line>();
	}
	
    public static void check () {
    }
    public static void output() {
    }
    
    public static void addShape (shape a){
        slist.add(a);
    }
    public static void minusShape (shape a){
        int i = slist.indexOf(a);
        slist.remove(i);
    }

    public static void addLine (line a){
        llist.add(a);
    }
    public static void minusLine (line a){
        int i = llist.indexOf(a);
        llist.remove(i);
    }
    
    public ArrayList <shape> getSlist(){
    	return slist;
    }
    public ArrayList <line> getLlist(){
    	return llist;
    }
}


