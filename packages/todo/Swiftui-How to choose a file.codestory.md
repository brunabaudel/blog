---
priority: low
isCodestory: true
headerImage: ![](./abstract-3840x2160-colorful-lines-4k-20643.jpg)
privacy: public
language: english
---

 

The fileImporter View Modifier in SwiftUI

SwiftUI is a declarative framework for building user interfaces on Apple platforms.
It provides a number of built-in view modifiers that allow you to easily customize the appearance
and behavior of your views. One of these view modifiers is `fileImporter`, which allows you to 
present a document picker to the user and import one or more files from their device.

To use the `fileImporter` view modifier, you first need to import the SwiftUI module. Then, you can 
apply the view modifier to any view by calling the `fileImporter` method on the view and passing it 
the necessary parameters.

The `fileImporter` view modifier has four parameters:

* `isPresented`: a binding to a state variable that determines whether the document picker is currently 
being presented. When this value is `true`, the document picker is shown, and when it is `false`, the
 document picker is dismissed.

* `allowedContentTypes`: an array of `UTType` values that specify the types of files that the document 
picker should allow the user to select.

* `allowsMultipleSelection`: a boolean value that determines whether the document picker should allow 
the user to select multiple files at once.

* `onCompletion`: a closure parameter, which is called when the document picker is dismissed. The closure is passed a `Result` 
object, which either contains an array of URLs for the selected files (if the import was successful) or 
an error (if the import failed).

Here is an example of how to use the `fileImporter` view modifier in a SwiftUI view:
 

```
import SwiftUI

struct ContentView: View {
    
    @State private var isShowDocumentPicker = false
    @State private var fileURL: URL?
    
    var body: some View {
        VStack {
            Text(fileURL?.lastPathComponent ?? "")
            
            Button("Open file") {
                isShowDocumentPicker = true
            }
        }
        .fileImporter(isPresented: $isShowDocumentPicker,
                        allowedContentTypes: [.pdf, .text],
                        allowsMultipleSelection: true) { result in
            fileURL = try? result.get().first
        }
    }
}
```

In this example, the `fileImporter` view modifier is applied to a `VStack` containing a `Text` view and a `Button`. The `Text` view displays the file name of the selected file (if any), and the `Button` allows the user to open the document picker by setting the `isShowDocumentPicker` state variable to `true`.

When the document picker is dismissed, the closure passed to the `fileImporter` view modifier is called, and it assigns the first `URL` of the selected files (if any) to the `fileURL` state variable. If the import failed, the `fileURL` state variable will be set to `nil`.

Using the `fileImporter` view modifier, you can easily add file import functionality to your SwiftUI app, allowing your users to select and import files from their device.

 https://developer.apple.com/documentation/swiftui/form/fileimporter(ispresented:allowedcontenttypes:allowsmultipleselection:oncompletion:)