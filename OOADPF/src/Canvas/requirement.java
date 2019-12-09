package Canvas;

public class requirement extends shape {

	private double top;
    private double left;
    private String Description;

    public requirement(double top, double left, String description) {
        this.top = top;
        this.left = left;
        this.Description=description;
    }

    public void changePos(double top,double left) {
    	this.top = top;
    	this.left = left;
    }
    
    public void editInfo(String description){
        this.Description=description;
	}
    
    public String getDescription() {
    	return this.Description;
    }
    public double getTop() {
        return this.top;
    }
    public double getLeft() {
        return this.left;
    }

}