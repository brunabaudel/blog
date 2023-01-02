---
priority: low
isCodestory: true
headerImage: ![](./abstract-3840x2160-colorful-lines-4k-20643.jpg)
privacy: public
language: english
---

 

Generating Thumbnails in SwiftUI with QLThumbnailGenerator

Apple provides a number of powerful tools for building modern iOS applications, including the ability to generate thumbnails for files. One way to do this is through the use of the `QLThumbnailGenerator` class, which is part of the QuickLook framework.

The `QLThumbnailGenerator` class provides a simple interface for generating thumbnails for a variety of file types, including images, documents, and video files. To generate a thumbnail, you first need to create a `QLThumbnailGenerator.Request` constant, which specifies the file you want to generate a thumbnail for, the size of the thumbnail, the scale of the thumbnail, and the representation types you want to generate.

In the following code snippet, we use the `QLThumbnailGenerator.Request` struct to create a thumbnail request for a file located at a given `URL`. We create a `QLThumbnailGenerator` instance and use the `generateRepresentations(for:completionHandler:)` method to generate a thumbnail for the given request. This method takes a closure as an argument, which is called when the thumbnail generation is complete. In the closure, we check for any errors that may have occurred during thumbnail generation and, if no errors occurred, we set the thumbnail image to the `cgImage` property of the thumbnail object:


```
import QuickLookThumbnailing

func generateThumbnail(_ fileURL: URL) {
    let size: CGSize = CGSize(width: 68, height: 88)
    let request = QLThumbnailGenerator.Request(fileAt: fileURL, size: size, scale: (UIScreen.main.scale), representationTypes: .all)
    let generator = QLThumbnailGenerator.shared

    generator.generateRepresentations(for: request) { (thumbnail, type, error) in
        DispatchQueue.main.async {
            if thumbnail == nil || error != nil {
                assert(false, "Thumbnail failed to generate")
            } else {
                DispatchQueue.main.async {
                    self.thumbnail = thumbnail!.cgImage
                }
            }
        }
    }
}
```

Using the `QLThumbnailGenerator` class is easy to generate thumbnails for files in your SwiftUI app. This can be useful for previewing documents, images, or other types of files without having to open them.

Here is a full testable code:

```
import SwiftUI
import QuickLookThumbnailing

struct ContentView: View {
    
    @State private var isShowDocumentPicker = false
    @State private var fileURL: URL?
    @State private var thumbnail: CGImage?
    
    var body: some View {
        VStack(spacing: 16) {
            
            if let thumbnail {
                Image(thumbnail, scale: 2, label: Text("PDF"))
                    .border(.blue, width: 4)
            }
            
            Button("Open file") {
                isShowDocumentPicker = true
            }
        }
        .fileImporter(isPresented: $isShowDocumentPicker,
                        allowedContentTypes: [.pdf, .text],
                        allowsMultipleSelection: true) { result in
            fileURL = try? result.get().first
            
            if let fileURL {
                generateThumbnail(fileURL)
            }
        }
    }
    
    func generateThumbnail(_ fileURL: URL) {
        let size: CGSize = CGSize(width: 68, height: 88)
        let request = QLThumbnailGenerator.Request(fileAt: fileURL, size: size, scale: (UIScreen.main.scale), representationTypes: .all)
        let generator = QLThumbnailGenerator.shared

        generator.generateRepresentations(for: request) { (thumbnail, type, error) in
            DispatchQueue.main.async {
                if thumbnail == nil || error != nil {
                    assert(false, "Thumbnail failed to generate")
                } else {
                    DispatchQueue.main.async {
                        self.thumbnail = thumbnail!.cgImage
                    }
                }
            }
        }
    }
}
```

 This code utilizes the `fileImporter` modifier to choose a file and shows the thumbnail after.

 https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailgenerator

undefined

