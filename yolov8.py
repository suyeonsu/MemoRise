import os
import subprocess

def install_dependencies():
    # 1. Clone the repository
    os.system("git clone https://github.com/ultralytics/ultralytics.git")

    # 2. Install the requirements
    os.system("pip install -r ultralytics/requirements.txt")

    # 3. Install the ultralytics package
    os.system("pip install ultralytics")

def yolo_cli_inference(model, source, task="detect"):
    # Use the YOLOv8 Command Line Interface (CLI)
    os.system(f"yolo task={task} mode=predict model={model} source={source} show=True")


def yolo_python_api(model_path, training_data, image_source):
    # 5. Use the YOLOv8 Python API
    from ultralytics import YOLO

    model = YOLO(model_path)  # load a pretrained YOLOv8 model
    model.train(data=training_data)  # train the model
    model.val()  # evaluate model performance on the validation set
    model.predict(source=image_source)  # predict on an image
    model.export(format="onnx")  # export the model to ONNX format

if __name__ == "__main__":
    install_dependencies()
    yolo_cli_inference(model="yolov8x-seg.pt", source="0", task="segment")
    yolo_python_api("yolov8n.pt", "coco128.yaml", "https://ultralytics.com/images/bus.jpg")