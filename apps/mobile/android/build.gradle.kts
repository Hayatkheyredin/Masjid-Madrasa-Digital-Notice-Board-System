// 1. Define the repositories where Gradle finds libraries
allprojects {
    repositories {
        google()
        mavenCentral()
    }
}

// 2. Define the new centralized build location (lazily)
// This points to a directory named "build" two levels above this file
val centralizedBuildDir = rootProject.layout.buildDirectory.dir("../../build")

// 3. Configure the Root Project to use the centralized directory
rootProject.layout.buildDirectory.set(centralizedBuildDir)

// 4. Configure all subprojects (app and plugins)
subprojects {
    // Each subproject gets its own folder inside the centralized build dir
    // e.g., ../../build/app or ../../build/shared_preferences
    val newSubprojectBuildDir = centralizedBuildDir.map { it.dir(project.name) }
    project.layout.buildDirectory.set(newSubprojectBuildDir)
}

// 5. Ensure the app is evaluated before other plugins
// This is often required for Flutter to inject dependencies correctly
subprojects {
    if (project.path != ":app") {
        evaluationDependsOn(":app")
    }
}

// 6. The Clean Task
// Deletes the entire centralized build folder when you run "./gradlew clean"
tasks.register<Delete>("clean") {
    delete(centralizedBuildDir)
}